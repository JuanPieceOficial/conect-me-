package com.conectme.app.data.repository

import com.conectme.app.data.Comment
import com.conectme.app.data.Post
import com.conectme.app.data.User

object FakeDataRepository {
    val users = listOf(
        User(
            id = "user-1",
            name = "Alex Doe",
            username = "alexdoe",
            avatar = "https://i.pravatar.cc/150?u=user-1",
            coverPhoto = "https://source.unsplash.com/random/800x600?nature,water",
            bio = "Photographer & Explorer. Capturing moments from around the world.",
            isFriend = true,
            followers = 1200,
            following = 300
        ),
        User(
            id = "user-2",
            name = "Samantha Green",
            username = "samgreen",
            avatar = "https://i.pravatar.cc/150?u=user-2",
            bio = "Chef, food blogger, and cat lover. Spreading joy through delicious recipes.",
            isFollowing = true,
            followers = 2500,
            following = 150
        ),
        User(
            id = "user-3",
            name = "Tom Anderson",
            username = "tomanderson",
            avatar = "https://i.pravatar.cc/150?u=user-3",
            bio = "Tech enthusiast and developer. Building the future, one line of code at a time.",
            followers = 800,
            following = 500
        ),
        User(
            id = "user-4",
            name = "Jessica Williams",
            username = "jesswilliams",
            avatar = "https://i.pravatar.cc/150?u=user-4",
            bio = "Fitness coach and motivational speaker.",
            followers = 1500,
            following = 200
        ),
        User(
            id = "user-5",
            name = "Chris Johnson",
            username = "chrisj",
            avatar = "https://i.pravatar.cc/150?u=user-5",
            bio = "Musician and artist. Creating sounds and visuals.",
            isFriend = false,
            isFollowing = true,
            followers = 1800,
            following = 700
        ),
    )

    fun getCurrentUser(): User {
        return User(
            id = "user-self",
            name = "Morgan",
            username = "morgan",
            avatar = "https://i.pravatar.cc/150?u=user-self",
            coverPhoto = "https://source.unsplash.com/random/800x600?city,night",
            bio = "Building awesome apps and exploring new technologies. Living the dream!",
            followers = 500,
            following = 100
        )
    }

    private val comments = mapOf(
        "post-1" to listOf(
            Comment(
                id = "c1-1",
                user = users[1],
                text = "Wow, absolutely breathtaking view! 😮",
                timestamp = "2h ago",
            ),
            Comment(
                id = "c1-2",
                user = users[2],
                text = "Incredible shot! What camera did you use?",
                timestamp = "1h ago",
            ),
        ),
        "post-2" to listOf(
            Comment(
                id = "c2-1",
                user = users[0],
                text = "This looks so serene. I wish I was there!",
                timestamp = "5h ago",
            ),
        ),
        "post-3" to listOf(
            Comment(
                id = "c3-1",
                user = currentUser,
                text = "That looks so delicious! Recipe please? 🙏",
                timestamp = "30m ago",
            )
        ),
        "post-4" to emptyList()
    )

    private val posts = listOf(
        Post(
            id = "post-1",
            user = users[0],
            text = "Found this hidden gem during my hike today. The views were simply stunning. #nature #adventure",
            image = "https://source.unsplash.com/random/800x600?nature,hike",
            timestamp = "4h ago",
            likes = 128,
            comments = comments["post-1"]!!,
        ),
        Post(
            id = "post-2",
            user = users[3],
            text = "There is nothing quite like a sunset on the beach. Feeling grateful for these simple moments.",
            image = "https://source.unsplash.com/random/800x600?beach,sunset",
            timestamp = "1d ago",
            likes = 256,
            comments = comments["post-2"]!!,
        ),
        Post(
            id = "post-3",
            user = users[1],
            text = "Perfecting my carbonara recipe tonight! The secret is in the guanciale. 🍝 #foodie #italianfood",
            image = "https://source.unsplash.com/random/800x600?food,pasta",
            timestamp = "2d ago",
            likes = 512,
            comments = comments["post-3"]!!,
        ),
        Post(
            id = "post-4",
            user = users[2],
            text = "Just deployed a new feature for my side project! It's a great feeling to see your code come to life. What is everyone working on?",
            image = null,
            timestamp = "3d ago",
            likes = 98,
            comments = comments["post-4"]!!,
        ),
    )

    fun getUsers(): List<User> {
        return users
    }

    fun getUser(username: String): User? {
        return (users + getCurrentUser()).find { it.username == username }
    }

    fun getPosts(): List<Post> {
        return posts
    }

    fun getPostsByUser(userId: String): List<Post> {
        return posts.filter { it.user.id == userId }
    }
}
