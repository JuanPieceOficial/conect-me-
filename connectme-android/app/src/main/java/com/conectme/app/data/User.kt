package com.conectme.app.data

data class User(
    val id: String,
    val username: String,
    val name: String,
    val avatar: String,
    val bio: String,
    val followers: Int,
    val following: Int
)
