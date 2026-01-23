package com.conectme.app.ui.screens

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.conectme.app.data.repository.FakeDataRepository
import com.conectme.app.ui.components.PostCard
import com.conectme.app.ui.theme.ConnectMeTheme

@Composable
fun FeedScreen() {
    val posts = FakeDataRepository.getPosts()

    Scaffold { paddingValues ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
            items(posts) { post ->
                PostCard(post = post)
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun FeedScreenPreview() {
    ConnectMeTheme {
        FeedScreen()
    }
}
