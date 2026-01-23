package com.conectme.app.ui.components

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

@Composable
fun RightSidebar() {
    Column(modifier = Modifier.padding(16.dp)) {
        Text("Suggestions")
        Text("Trends")
    }
}

@Preview(showBackground = true)
@Composable
fun RightSidebarPreview() {
    RightSidebar()
}
