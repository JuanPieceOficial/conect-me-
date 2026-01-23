package com.conectme.app.ui.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material3.Button
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import coil.compose.rememberAsyncImagePainter
import com.conectme.app.data.User
import com.conectme.app.data.repository.FakeDataRepository
import com.conectme.app.data.repository.FakeDataRepository.currentUser

@Composable
fun ProfileHeader(user: User) {
    val isCurrentUser = user.id == FakeDataRepository.currentUser.id

    Column {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(200.dp)
        ) {
            if (user.coverPhoto != null) {
                Image(
                    painter = rememberAsyncImagePainter(user.coverPhoto),
                    contentDescription = "Cover Photo",
                    modifier = Modifier.fillMaxSize(),
                    contentScale = ContentScale.Crop
                )
            }

            Box(
                modifier = Modifier
                    .align(Alignment.BottomStart)
                    .padding(start = 16.dp)
            ) {
                Image(
                    painter = rememberAsyncImagePainter(user.avatar),
                    contentDescription = "User Avatar",
                    modifier = Modifier
                        .size(120.dp)
                        .clip(CircleShape)
                        .border(4.dp, MaterialTheme.colorScheme.surface, CircleShape),
                    contentScale = ContentScale.Crop
                )
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text(text = user.name, style = MaterialTheme.typography.headlineSmall)
                Text(text = "@${user.username}", style = MaterialTheme.typography.bodyMedium)
            }
            if (isCurrentUser) {
                Button(onClick = { /*TODO*/ }) {
                    Icon(
                        imageVector = Icons.Default.Edit,
                        contentDescription = "Edit Profile",
                        modifier = Modifier.size(20.dp)
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(text = "Edit Profile")
                }
            } else {
                // Placeholder for FriendButton
                Button(onClick = { /*TODO*/ }) {
                    Text(text = if (user.isFriend == true) "Friends" else "Add Friend")
                }
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        Text(
            text = user.bio,
            modifier = Modifier.padding(horizontal = 16.dp),
            style = MaterialTheme.typography.bodyLarge
        )
    }
}
