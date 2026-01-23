package com.conectme.app.data

data class User(
    val id: String,
    val username: String,
    val name: String,
    val avatar: String,
    val coverPhoto: String,
    val bio: String,
    val followers: Int,
    val following: Int,
    val isFriend: Boolean,
    val isFollowing: Boolean
)
