# MCP Connection Status Check

## Current Status: ❌ NOT CONNECTED

The Figma MCP server is **not currently connected** to Cursor.

## How to Connect

### Option 1: Connect via Cursor UI (Recommended)

1. **Open Cursor Settings:**
   - Press `Cmd + ,` (Mac) or `Ctrl + ,` (Windows/Linux)
   - Or: `Cursor > Settings`

2. **Find MCP Settings:**
   - In the settings search bar, type "MCP"
   - Or look for "Model Context Protocol" section
   - Or use Command Palette: `Cmd + Shift + P` → search "MCP"

3. **Add Figma MCP Server:**
   - Click "Add Custom MCP" or "Add Server"
   - Server name: `figma`
   - URL: `https://mcp.figma.com/mcp`
   - Type: `http`

4. **Connect and Authenticate:**
   - Click "Connect" or "Start" next to the server
   - Allow access when prompted
   - You may need to log in to Figma

### Option 2: Desktop MCP Server

If you prefer the desktop server:

1. **Enable in Figma:**
   - Open Figma Desktop App (already running ✓)
   - Open your design file
   - Press `Shift + D` to enter Dev Mode
   - In the inspect panel, find "MCP server"
   - Click "Enable desktop MCP server"
   - Server will run at `http://127.0.0.1:3845/mcp`

2. **Add in Cursor:**
   - Follow steps 1-3 from Option 1
   - Use URL: `http://127.0.0.1:3845/mcp`
   - Server name: `figma-desktop`

## Verify Connection

After connecting, you can verify by:

1. **Check MCP Resources:**
   - The AI should be able to list Figma resources
   - Try asking: "List available Figma designs"

2. **Test with a Figma Link:**
   - Copy a link to a Figma frame
   - Paste it in a prompt
   - The AI should be able to access the design

## Troubleshooting

- **"No MCP resources found"**: Server not connected - follow setup steps above
- **"Invalid sessionId"**: Desktop server needs to be enabled in Figma Dev Mode
- **"Method not allowed"**: Normal response for direct URL access - needs proper MCP client connection
- **Can't find MCP settings**: Make sure Cursor is updated to the latest version

## Next Steps

1. Connect the MCP server using one of the options above
2. Once connected, you can share Figma design links
3. The AI will be able to access and implement your designs

