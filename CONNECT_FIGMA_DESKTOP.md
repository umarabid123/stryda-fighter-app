# Connect Figma Desktop MCP Server - Quick Guide

## ✅ Status Check
- ✅ Figma Desktop App: Running
- ✅ Desktop MCP Server: Active on port 3845
- ⚠️  Cursor Connection: Needs to be configured

## 🚀 Quick Setup Steps

### Step 1: Enable Desktop MCP in Figma (if not already done)
1. Open your Figma design file in the **Figma Desktop App**
2. Press `Shift + D` to enter **Dev Mode**
3. In the **inspect panel** (right side), scroll down to find **"MCP server"** section
4. Click **"Enable desktop MCP server"**
5. You should see it's running at `http://127.0.0.1:3845/mcp`

### Step 2: Connect in Cursor

**Method 1: Via Settings UI (Recommended)**
1. Open Cursor
2. Press `Cmd + ,` (or `Ctrl + ,` on Windows) to open **Settings**
3. In the search bar at the top, type: **`MCP`**
4. Look for **"MCP Servers"** or **"Model Context Protocol"** section
5. Click **"Add Custom MCP"** or **"Add Server"** button
6. Fill in the form:
   - **Server name/ID**: `figma-desktop`
   - **URL**: `http://127.0.0.1:3845/mcp`
   - **Type**: `http` (or select HTTP from dropdown)
7. Click **"Save"** or **"Add"**
8. Click **"Connect"** or **"Start"** next to the server
9. Allow access if prompted

**Method 2: Via Command Palette**
1. Press `Cmd + Shift + P` (or `Ctrl + Shift + P`)
2. Type: **`MCP: Add Server`** or **`MCP: Configure`**
3. Follow the prompts to add the server

### Step 3: Verify Connection
After connecting, you can verify by:
- The server should show as "Connected" or "Running" in Cursor's MCP settings
- You can ask the AI: "List available MCP resources" - it should show Figma resources
- Try pasting a Figma design link - the AI should be able to access it

## 📝 Configuration Details

**Server Configuration:**
```json
{
  "mcpServers": {
    "figma-desktop": {
      "url": "http://127.0.0.1:3845/mcp",
      "type": "http"
    }
  }
}
```

## 🔧 Troubleshooting

**"Server not found" or "Connection failed":**
- Make sure Figma Desktop App is running
- Verify Dev Mode is enabled (`Shift + D`)
- Check that "Enable desktop MCP server" is clicked in Figma
- Try restarting both Figma and Cursor

**"Port 3845 not available":**
- Another application might be using the port
- Restart Figma Desktop App
- Re-enable the MCP server in Dev Mode

**"Can't find MCP settings in Cursor":**
- Make sure Cursor is updated to the latest version
- Try using Command Palette: `Cmd + Shift + P` → search "MCP"
- Check Cursor's documentation for MCP setup

## ✅ Success Indicators

Once connected, you should see:
- ✅ Server status: "Connected" or "Running"
- ✅ No error messages in Cursor
- ✅ AI can access Figma resources when you share links

## 🎯 Next Steps

After connecting:
1. Open your Figma design file
2. Select a frame or component
3. Right-click → **"Copy link to selection"**
4. Paste the link in Cursor chat
5. Ask the AI to implement the design!

