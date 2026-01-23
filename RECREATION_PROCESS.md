# Recreating "Connect Me" from Next.js to Native Android

This document outlines the process of recreating the "Connect Me" social media application from a Next.js web application to a native Android application using Kotlin and Jetpack Compose.

## 1. Initial Plan

The project will be broken down into the following major steps:

1.  **Analyze the Next.js Application**: Use automated code analysis tools to inspect the existing web application in the `src/` directory. The goal is to understand its structure, UI components, features, and data flow.
2.  **Plan the Re-implementation**: Based on the analysis, create a detailed plan for the native Android application. This will include defining the app's architecture, navigation, and the list of screens and components to be created.
3.  **Implement the Data Layer**: Re-implement the data repositories and models in Kotlin. The existing `FakeDataRepository.kt` will be updated or replaced to match the data structure of the web application.
4.  **Implement the UI**: Re-create the UI of the web application using Jetpack Compose. This will be done screen by screen, component by component.
    *   Main navigation structure and theme.
    *   Feed screen.
    *   Profile screen.
    *   Other screens as identified in the analysis.
5.  **Testing and Verification**: Ensure the application compiles, runs without errors, and the functionality matches the original web application.
6.  **Final Documentation**: Complete and review this document.

---

## 2. Progress

### Data Layer (Completed)
-   Analyzed `src/lib/data.ts` to understand `User`, `Post`, and `Comment` data structures.
-   Updated `connectme-android/app/src/main/java/com/conectme/app/data/User.kt` to include `coverPhoto`, `isFriend`, and `isFollowing` properties (nullable).
-   Created `connectme-android/app/src/main/java/com/conectme/app/data/Comment.kt` data class.
-   Updated `connectme-android/app/src/main/java/com/conectme/app/data/Post.kt`:
    -   Renamed `caption` to `text`.
    -   Made `image` property nullable.
    -   Changed `comments` from `Int` to `List<Comment>`.
-   Updated `connectme-android/app/src/main/java/com/conectme/app/data/repository/FakeDataRepository.kt` to use the new data models and mock data from the Next.js application.

### UI Components (In Progress)
-   Analyzed `src/app/(main)/page.tsx` to understand the Feed screen structure.
-   Analyzed `src/app/(main)/profile/[username]/page.tsx` to understand the Profile screen structure.
-   Analyzed `src/components/profile/profile-header.tsx` to understand the Profile Header component.
-   Updated `connectme-android/app/src/main/java/com/conectme/app/ui/components/PostCard.kt` to be compatible with the new `Post` data class.
-   Created `connectme-android/app/src/main/java/com/conectme/app/ui/components/ProfileHeader.kt` to recreate the profile header from the web app.
-   Updated `connectme-android/app/src/main/java/com/conectme/app/ui/screens/ProfileScreen.kt` to use the `ProfileHeader` and display user posts.

---
*This document will be updated as the project progresses.*