package com.gemini.social.data

import kotlin.random.Random

object MockData {
    val users = listOf(
        User(
            id = "user1",
            username = "Alice",
            profilePictureUrl = "https://randomuser.me/api/portraits/women/1.jpg",
            bio = "Exploring the world, one photo at a time."
        ),
        User(
            id = "user2",
            username = "Bob",
            profilePictureUrl = "https://randomuser.me/api/portraits/men/2.jpg",
            bio = "Software engineer, nature lover, coffee enthusiast."
        ),
        User(
            id = "user3",
            username = "Charlie",
            profilePictureUrl = "https://randomuser.me/api/portraits/men/3.jpg",
            bio = "Artist, dreamer, always learning."
        ),
        User(
            id = "user4",
            username = "Diana",
            profilePictureUrl = "https://randomuser.me/api/portraits/women/4.jpg",
            bio = "Foodie, traveler, cat mom."
        )
    )

    val posts = listOf(
        Post(
            id = "post1",
            userId = "user1",
            content = "Enjoying a beautiful sunset today!",
            imageUrl = "https://picsum.photos/id/1018/600/400",
            timestamp = System.currentTimeMillis() - Random.nextLong(1000, 10000000),
            likes = Random.nextInt(10, 200)
        ),
        Post(
            id = "post2",
            userId = "user2",
            content = "Just finished coding a new feature! So happy.",
            imageUrl = null,
            timestamp = System.currentTimeMillis() - Random.nextLong(1000, 10000000),
            likes = Random.nextInt(10, 200)
        ),
        Post(
            id = "post3",
            userId = "user1",
            content = "What an amazing view from the mountains!",
            imageUrl = "https://picsum.photos/id/10/600/400",
            timestamp = System.currentTimeMillis() - Random.nextLong(1000, 10000000),
            likes = Random.nextInt(10, 200)
        ),
        Post(
            id = "post4",
            userId = "user3",
            content = "New painting in progress. Stay tuned!",
            imageUrl = "https://picsum.photos/id/20/600/400",
            timestamp = System.currentTimeMillis() - Random.nextLong(1000, 10000000),
            likes = Random.nextInt(10, 200)
        ),
        Post(
            id = "post5",
            userId = "user2",
            content = "Testing out some new tech. Pretty cool!",
            imageUrl = null,
            timestamp = System.currentTimeMillis() - Random.nextLong(1000, 10000000),
            likes = Random.nextInt(10, 200)
        ),
        Post(
            id = "post6",
            userId = "user4",
            content = "Delicious meal at my favorite restaurant!",
            imageUrl = "https://picsum.photos/id/1084/600/400",
            timestamp = System.currentTimeMillis() - Random.nextLong(1000, 10000000),
            likes = Random.nextInt(10, 200)
        )
    ).sortedByDescending { it.timestamp }

    fun findUserById(userId: String): User? {
        return users.find { it.id == userId }
    }

    fun getPostsForUser(userId: String): List<Post> {
        return posts.filter { it.userId == userId }
    }
}
