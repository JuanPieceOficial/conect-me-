package com.conectme.app.data.repository

import com.conectme.app.data.Post
import com.conectme.app.data.User

object FakeDataRepository {
    private val users = listOf(
        User(
            id = "user1",
            username = "johndoe",
            name = "John Doe",
            avatar = "https://randomuser.me/api/portraits/men/1.jpg",
            bio = "Software Engineer | Android Developer",
            followers = 1200,
            following = 300
        ),
        User(
            id = "user2",
            username = "janesmith",
            name = "Jane Smith",
            avatar = "https://randomuser.me/api/portraits/women/2.jpg",
            bio = "UI/UX Designer | Coffee Lover",
            followers = 2500,
            following = 150
        ),
        User(
            id = "user3",
            username = "peterv",
            name = "Peter V",
            avatar = "https://randomuser.me/api/portraits/men/3.jpg",
            bio = "Exploring the world one code line at a time.",
            followers = 800,
            following = 500
        )
    )

    private val posts = listOf(
        Post(
            id = "post1",
            user = users[0],
            image = "https://source.unsplash.com/random/800x600?nature",
            caption = "Enjoying the beautiful scenery today!",
            likes = 150,
            comments = 25,
            timestamp = "2 hours ago"
        ),
        Post(
            id = "post2",
            user = users[1],
            image = "https://source.unsplash.com/random/800x600?city",
            caption = "City lights and late night coding sessions.",
            likes = 300,
            comments = 50,
            timestamp = "5 hours ago"
        ),
        Post(
            id = "post3",
            user = users[0],
            image = "https://source.unsplash.com/random/800x600?travel",
            caption = "New adventures await!",
            likes = 200,
            comments = 30,
            timestamp = "1 day ago"
        ),
        Post(
            id = "post4",
            user = users[2],
            image = "https://source.unsplash.com/random/800x600?coding",
            caption = "Just finished a new feature for ConnectMe! #coding #androiddev",
            likes = 100,
            comments = 15,
            timestamp = "3 days ago"
        )
    )

    fun getUsers(): List<User> {
        return users
    }

    fun getUser(username: String): User? {
        return users.find { it.username == username }
    }

    fun getPosts(): List<Post> {
        return posts
    }

    fun getPostsByUser(userId: String): List<Post> {
        return posts.filter { it.user.id == userId }
    }
}
