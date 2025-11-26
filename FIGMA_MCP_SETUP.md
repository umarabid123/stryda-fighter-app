# Figma MCP Setup Guide

This guide will help you set up the Figma MCP (Model Context Protocol) server in Cursor to access Figma designs.

## Option 1: Remote MCP Server (Recommended)

The remote MCP server connects to Figma's hosted endpoint and works with Figma in the browser.

### Setup Steps:

1. **Open Cursor Settings:**
   - Press `Cmd + ,` (Mac) or `Ctrl + ,` (Windows/Linux) to open settings
   - Or go to `Cursor > Settings`

2. **Navigate to MCP Settings:**
   - Look for "MCP" or "Model Context Protocol" in the settings
   - Or use Command Palette (`Cmd + Shift + P`) and search for "MCP"

3. **Add Figma MCP Server:**
   - Click "Add Custom MCP" or "Add Server"
   - Use the following configuration:
     ```json
     {
       "mcpServers": {
         "figma": {
           "url": "https://mcp.figma.com/mcp",
           "type": "http"
         }
       }
     }
     ```

4. **Authenticate:**
   - Click "Connect" or "Authenticate" next to the Figma server
   - Allow access when prompted
   - You may need to log in to Figma

## Option 2: Desktop MCP Server

The desktop MCP server runs locally through the Figma desktop app.

### Prerequisites:
- Figma Desktop App installed and running
- Figma file open in Dev Mode

### Setup Steps:

1. **Enable Desktop MCP in Figma:**
   - Open your Figma design file in the desktop app
   - Press `Shift + D` to enter Dev Mode
   - In the inspect panel, find "MCP server" section
   - Click "Enable desktop MCP server"
   - The server will run at `http://127.0.0.1:3845/mcp`

2. **Configure in Cursor:**
   - Follow steps 1-3 from Option 1
   - Use this configuration instead:
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

## Using the MCP Server

Once configured, you can:

1. **Link-Based Access:**
   - In Figma, right-click on a frame or component
   - Select "Copy link to selection"
   - Paste the link in your prompt to Cursor
   - The AI will access the design via MCP

2. **Selection-Based Access (Desktop Only):**
   - Select a frame or layer in Figma desktop app
   - Ask Cursor to implement the current selection
   - The AI will access the selected design automatically

## Troubleshooting

- **Server not connecting:** Make sure Figma desktop app is running (for desktop server)
- **Authentication issues:** Try disconnecting and reconnecting
- **Access denied:** Ensure you have proper permissions in Figma
- **Rate limits:** Free plans have limited API calls per month

## Configuration File

A sample `mcp.json` file is included in this directory. You can reference it, but Cursor typically manages MCP servers through its UI settings rather than a file.

## Resources

- [Figma MCP Documentation](https://developers.figma.com/docs/figma-mcp-server/)
- [Figma Help Center - MCP Setup](https://help.figma.com/hc/en-us/articles/35281350665623)

