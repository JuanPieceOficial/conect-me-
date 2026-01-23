package com.conectme.app.data

data class User(
    val id: String,
    val username: String,
    val name: String,
    val avatar: String,
    val coverPhoto: String? = null,
    val bio: String,
    val followers: Int,
    val following: Int,
    val isFriend: Boolean? = null,
    val isFollowing: Boolean? = null
)
