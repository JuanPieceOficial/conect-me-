package com.conectme.app.data

data class Post(
    val id: String,
    val user: User,
    val image: String,
    val caption: String,
    val likes: Int,
    val comments: Int,
    val timestamp: String // Consider using LocalDateTime or Instant for better date handling
)
