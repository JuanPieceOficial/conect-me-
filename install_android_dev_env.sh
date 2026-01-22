#!/bin/bash

echo "Este script configurará tu entorno de desarrollo Android básico en Linux y compilará la aplicación 'GeminiSocial'."
echo "Necesitarás permisos de sudo para instalar algunos paquetes."
echo "---"

# Paso 1: Instalar Java Development Kit (JDK)
echo "Instalando OpenJDK 17..."
sudo apt update
sudo apt install -y openjdk-17-jdk
if [ $? -ne 0 ]; then
    echo "Error: Falló la instalación de OpenJDK 17. Asegúrate de tener los repositorios correctos o intenta con 'sudo apt install -y default-jdk'."
    exit 1
fi
echo "Verificando instalación de Java:"
java -version
javac -version
echo "---"

# Paso 2: Instalar Android SDK Command-Line Tools
echo "Descargando e instalando Android SDK Command-Line Tools..."
SDK_TOOLS_URL="https://dl.google.com/android/repository/commandlinetools-linux-8501254_latest.zip" # Última versión conocida, puede variar.
SDK_DIR="$HOME/.android/sdk"
CMD_LINE_TOOLS_DIR="$SDK_DIR/cmdline-tools"

mkdir -p "$CMD_LINE_TOOLS_DIR"
cd "$CMD_LINE_TOOLS_DIR"
wget -O sdk-tools.zip "$SDK_TOOLS_URL"
if [ $? -ne 0 ]; then
    echo "Error: Falló la descarga de Android SDK Command-Line Tools."
    exit 1
fi
unzip sdk-tools.zip
mv cmdline-tools latest # Estructura esperada por Android SDK Manager
rm sdk-tools.zip
cd - # Volver al directorio original

echo "Configurando variables de entorno ANDROID_HOME y PATH..."
echo 'export ANDROID_HOME=$HOME/.android/sdk' >> ~/.bashrc
echo 'export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools' >> ~/.bashrc
source ~/.bashrc

# Instalar plataformas y herramientas necesarias
echo "Instalando plataformas y herramientas del SDK con sdkmanager..."
sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"
if [ $? -ne 0 ]; then
    echo "Error: Falló la instalación de componentes del SDK. Asegúrate de que sdkmanager esté en tu PATH y acepta las licencias."
    # Para aceptar licencias, puedes ejecutar: yes | sdkmanager --licenses
    exit 1
fi
echo "---"

# Paso 3: Instalar ADB (Android Debug Bridge)
echo "Instalando Android Debug Bridge (ADB)..."
sudo apt install -y android-tools-adb
if [ $? -ne 0 ]; then
    echo "Error: Falló la instalación de ADB."
    exit 1
fi
echo "---"

# Paso 4: Configurar Gradle Wrapper y compilar la aplicación
echo "Navegando al directorio del proyecto y haciendo el wrapper ejecutable..."
cd "/home/user/studio/gemini-social-android" # Ajusta esta ruta si es diferente
chmod +x gradlew
echo "Limpiando y compilando la versión de depuración de la aplicación..."
./gradlew clean assembleDebug
if [ $? -ne 0 ]; then
    echo "Error: Falló la compilación de la aplicación. Revisa la salida de Gradle para más detalles."
    exit 1
fi
echo "La aplicación ha sido compilada. El APK de depuración se encuentra en: app/build/outputs/apk/debug/app-debug.apk"
echo "---"

# Paso 5: Instalar y Ejecutar la Aplicación
echo "Conecta un dispositivo Android (con depuración USB habilitada) o inicia un emulador."
echo "Presiona Enter para continuar una vez que tu dispositivo/emulador esté listo..."
read -r

echo "Instalando el APK en tu dispositivo/emulador..."
adb install app/build/outputs/apk/debug/app-debug.apk
if [ $? -ne 0 ]; then
    echo "Error: Falló la instalación del APK. Asegúrate de que ADB reconoce tu dispositivo (adb devices)."
    exit 1
fi

echo "Iniciando la aplicación 'GeminiSocial'..."
adb shell am start -n "com.gemini.social/com.gemini.social.MainActivity"

echo "---"
echo "¡Configuración y compilación completadas! Deberías ver la aplicación 'GeminiSocial' en tu dispositivo/emulador."
echo "Para una experiencia de desarrollo completa, sigue siendo recomendable usar Android Studio."
