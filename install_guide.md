# Guía de Instalación y Compilación de la Aplicación Android "GeminiSocial"

Esta guía te ayudará a configurar tu entorno de desarrollo en Linux y a compilar la aplicación Android generada.

## Opciones para Configurar el Entorno

Tienes dos opciones principales para configurar tu entorno:

1.  **Usar Android Studio (Recomendado):** Es la forma más sencilla y completa. Android Studio incluye el SDK de Android, Gradle, un emulador y un IDE para facilitar el desarrollo.
2.  **Usar la Línea de Comandos:** Requiere instalar los componentes del SDK y configurar el entorno manualmente.

---

## Opción 1: Configuración con Android Studio (Recomendado)

1.  **Descargar e Instalar Android Studio:**
    *   Ve a la página oficial de Android Studio: [developer.android.com/studio](https://developer.android.com/studio)
    *   Descarga la versión para Linux.
    *   Descomprime el archivo `.tar.gz` en el directorio de tu preferencia (ej. `~/android-studio`).
    *   Abre una terminal, navega a la carpeta `bin` dentro del directorio de Android Studio y ejecuta `./studio.sh`.
        ```bash
        cd ~/Descargas # O donde hayas descargado el archivo
        tar -xzf android-studio-*-linux.tar.gz
        cd android-studio/bin
        ./studio.sh
        ```
    *   Sigue el asistente de configuración de Android Studio para instalar el SDK de Android, la plataforma y otros componentes. Asegúrate de instalar el SDK correspondiente al `compileSdk` de la aplicación (versión 34).

2.  **Importar el Proyecto en Android Studio:**
    *   Abre Android Studio.
    *   Selecciona `File` > `Open` (o `Open an existing Android Studio project`).
    *   Navega hasta la carpeta `/home/user/studio/gemini-social-android` (donde he generado los archivos) y selecciónala.
    *   Android Studio importará el proyecto, configurará el SDK y Gradle automáticamente.

3.  **Compilar y Ejecutar la Aplicación desde Android Studio:**
    *   Una vez que el proyecto se haya sincronizado, puedes hacer clic en el botón `Run` (el icono verde de 'Play') en la barra de herramientas de Android Studio.
    *   Selecciona un emulador configurado o un dispositivo Android conectado (con la depuración USB habilitada) para ejecutar la aplicación.

---

## Opción 2: Configuración Manual (Línea de Comandos)

### Paso 1: Instalar Java Development Kit (JDK)

Android requiere Java para compilar. Si no lo tienes, puedes instalar OpenJDK:

```bash
sudo apt update
sudo apt install -y openjdk-17-jdk # O una versión superior como openjdk-21-jdk
```

Verifica la instalación:

```bash
java -version
javac -version
```

### Paso 2: Instalar Android SDK Command-Line Tools

Si no usas Android Studio, necesitarás las herramientas de línea de comandos para gestionar el SDK.

1.  **Descarga las herramientas:**
    *   Visita [developer.android.com/tools/releases/platform-tools](https://developer.android.com/tools/releases/platform-tools)
    *   Descarga el archivo `commandlinetools-linux-*.zip`.
2.  **Descomprime y configura:**
    ```bash
    mkdir -p ~/.android/sdk/cmdline-tools
    cd ~/.android/sdk/cmdline-tools
    wget -O commandlinetools.zip "URL_DE_DESCARGA_DE_COMMANDLINETOOLS" # Reemplaza con la URL real
    unzip commandlinetools.zip
    mv cmdline-tools latest # Renombra la carpeta descomprimida
    rm commandlinetools.zip
    ```
3.  **Configura las variables de entorno:**
    ```bash
    echo 'export ANDROID_HOME=$HOME/.android/sdk' >> ~/.bashrc
    echo 'export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools' >> ~/.bashrc
    source ~/.bashrc
    ```
4.  **Instala las plataformas y herramientas necesarias:**
    ```bash
    sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"
    yes | sdkmanager --licenses # Acepta automáticamente las licencias del SDK
    ```

### Paso 3: Instalar ADB (Android Debug Bridge)

ADB es una herramienta esencial para interactuar con dispositivos Android.

```bash
sudo apt install -y android-tools-adb
```

### Paso 4: Configurar Gradle Wrapper y Compilar la Aplicación

El proyecto `gemini-social-android` ya incluye el "Gradle Wrapper" (`gradlew`), que descarga y usa automáticamente la versión correcta de Gradle.

1.  **Navega al directorio del proyecto:**
    ```bash
    cd /home/user/studio/gemini-social-android
    ```
2.  **Haz el wrapper ejecutable:**
    ```bash
    chmod +x gradlew
    ```
3.  **Limpia y compila la versión de depuración (debug):**
    ```bash
    ./gradlew clean assembleDebug
    ```
    El APK de depuración se encontrará en: `gemini-social-android/app/build/outputs/apk/debug/app-debug.apk`.

### Paso 5: Instalar y Ejecutar la Aplicación en un Dispositivo/Emulador

1.  **Conecta un dispositivo Android** (con la depuración USB habilitada) o inicia un emulador de Android.
2.  **Instala el APK:**
    ```bash
    adb install app/build/outputs/apk/debug/app-debug.apk
    ```
3.  **Inicia la aplicación:**
    ```bash
    adb shell am start -n "com.gemini.social/com.gemini.social.MainActivity"
    ```
    (También puedes buscar el icono 'GeminiSocial' en tu dispositivo/emulador).

---

Espero que esta guía detallada te sea de gran utilidad. ¡Avísame si tienes alguna otra pregunta!
