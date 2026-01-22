@rem
@rem Copyright 2017 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      http://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem

@echo off

SET DIRNAME=%~dp0
IF "%DIRNAME%" == "" SET DIRNAME=.
SET APP_BASE_NAME=%~n0
SET APP_HOME=%DIRNAME%

@rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS.
SET DEFAULT_JVM_OPTS=

@rem Find java.exe and check its version
SET JAVA_EXE=
IF DEFINED JAVA_HOME (
    IF EXIST "%JAVA_HOME%\bin\java.exe" SET JAVA_EXE="%JAVA_HOME%\bin\java.exe"
)
IF NOT DEFINED JAVA_EXE (
    FOR %%i IN (java.exe) DO (
        IF "%%~fi" NEQ "" SET JAVA_EXE="%%~fi"
    )
)
IF NOT DEFINED JAVA_EXE (
    echo.
    echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
    echo.
    echo Please set the JAVA_HOME environment variable to the root directory of your Java installation.
    echo.
    EXIT /B 1
)

@rem Execute Gradle with the wrapper JAR.
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% -Dorg.gradle.appname="%APP_BASE_NAME%" -classpath "%APP_HOME%gradle\wrapper\gradle-wrapper.jar" org.gradle.wrapper.GradleWrapperMain %*
