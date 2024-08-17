// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;
use serialport::prelude::*;
use std::time::Duration;
use std::io::prelude::*;

// UART reading function
fn read_uart_data() -> Result<String, Box<dyn std::error::Error>> {
    let port_name = "/dev/ttyUSB0"; // Change this to your UART port
    let baud_rate = 9600;

    let settings = SerialPortSettings {
        baud_rate,
        ..Default::default()
    };

    let mut port = serialport::open_with_settings(port_name, &settings)?;

    port.set_timeout(Duration::from_secs(10))?;
    let mut buffer: Vec<u8> = vec![0; 1000];
    port.read(&mut buffer)?;

    let data = String::from_utf8_lossy(&buffer).to_string();
    Ok(data)
}

// Tauri command to get UART data
#[tauri::command]
fn get_uart_data() -> Result<String, String> {
    match read_uart_data() {
        Ok(data) => Ok(data),
        Err(err) => Err(err.to_string()),
    }
}

// Existing greet function
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, get_uart_data])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
