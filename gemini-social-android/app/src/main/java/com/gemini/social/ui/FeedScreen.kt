package com.gemini.social.ui

import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.navigation.NavController
import com.gemini.social.data.MockData

@Composable
fun FeedScreen(navController: NavController) {
    LazyColumn {
        items(MockData.posts) { post ->
            PostCard(post = post, navController = navController)
        }
    }
}
