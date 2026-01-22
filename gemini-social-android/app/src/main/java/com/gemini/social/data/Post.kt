package com.gemini.social.data

data class Post(
    val id: String,
    val userId: String,
    val content: String,
    val imageUrl: String? = null,
    val timestamp: Long,
    val likes: Int = 0
)
