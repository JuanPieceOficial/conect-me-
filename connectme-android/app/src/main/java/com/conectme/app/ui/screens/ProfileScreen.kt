package com.conectme.app.ui.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.conectme.app.data.repository.FakeDataRepository
import com.conectme.app.ui.components.PostCard
import com.conectme.app.ui.components.ProfileHeader

@Composable
fun ProfileScreen(username: String) {
    val user = FakeDataRepository.getUser(username)

    if (user != null) {
        val userPosts = FakeDataRepository.getPostsByUser(user.id)
        LazyColumn {
            item {
                ProfileHeader(user = user)
            }
            item {
                Text(
                    text = "Posts",
                    style = androidx.compose.material3.MaterialTheme.typography.headlineMedium,
                    modifier = Modifier.padding(16.dp)
                )
            }
            items(userPosts) { post ->
                PostCard(post = post)
            }
        }
    } else {
        Text(text = "User not found")
    }
}
