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

@Composable
fun ProfileScreen(username: String) {
    val user = FakeDataRepository.getUser(username)
    val posts = FakeDataRepository.getPostsByUser(user?.id ?: "")

    if (user != null) {
        Column {
            Text(text = user.name, modifier = Modifier.padding(16.dp))
            Text(text = user.bio ?: "", modifier = Modifier.padding(horizontal = 16.dp))
            LazyColumn {
                items(posts) { post ->
                    PostCard(post = post)
                }
            }
        }
    } else {
        Text(text = "User not found")
    }
}
