package com.conectme.app.ui

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable

sealed class Screen(val route: String) {
    object Feed : Screen("feed")
    object Profile : Screen("profile/{username}") {
        fun createRoute(username: String) = "profile/$username"
    }
}

@Composable
fun AppNavGraph(navController: NavHostController) {
    NavHost(navController = navController, startDestination = Screen.Feed.route) {
        composable(Screen.Feed.route) {
            com.conectme.app.ui.screens.FeedScreen()
        }
        composable(Screen.Profile.route) { backStackEntry ->
            val username = backStackEntry.arguments?.getString("username")
            if (username != null) {
                com.conectme.app.ui.screens.ProfileScreen(username = username)
            }
        }
    }
}
