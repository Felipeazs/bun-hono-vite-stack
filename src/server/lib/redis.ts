import env from "@/env"
import { createClient } from "redis"

export const redis = createClient({
	url: env.REDIS_URL,
})
;(async () => {
	redis.on("error", (err) => console.error(err))
	redis.connect().then(() => console.log("Redis is up!"))
})()

const isProd = env.NODE_ENV === "production"
const EXP_TIME = isProd ? 3600 : 180

export const getRedisCache = async ({ item, key }: { item: string; key: string }) => {
	const redis_res = await redis.hGet(key, item)
	if (redis_res) return JSON.parse(redis_res).value

	return
}

export const setRedisCache = async <T>({
	item,
	key,
	value,
}: {
	item: string
	key: string
	value: T
}) => {
	const res = await redis.hSet(key, item, JSON.stringify(value))
	await redis.expire(key, EXP_TIME, "NX")

	return res
}

export const deleteRedisItem = async ({ item, key }: { item: string; key: string }) => {
	await redis.hDel(key, item)
}

export const deleteAllUserRedis = async (key: string) => {
	const userHash = await redis.hGetAll(key)

	for (let cat in userHash) {
		await redis.hDel(key, cat)
	}
}
