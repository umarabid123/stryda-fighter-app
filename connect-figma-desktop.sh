#!/bin/bash

# Script to help connect Figma Desktop MCP Server to Cursor
# This script provides instructions and checks the server status

echo "🔍 Checking Figma Desktop MCP Server Status..."
echo ""

# Check if Figma is running
if pgrep -f "Figma.app" > /dev/null; then
    echo "✅ Figma Desktop App is running"
else
    echo "❌ Figma Desktop App is not running"
    echo "   Please open Figma Desktop App first"
    exit 1
fi

# Check if port 3845 is listening
if lsof -i :3845 | grep -q LISTEN; then
    echo "✅ Desktop MCP Server is active on port 3845"
else
    echo "⚠️  Desktop MCP Server is not active"
    echo "   Please enable it in Figma:"
    echo "   1. Open your Figma design file"
    echo "   2. Press Shift + D to enter Dev Mode"
    echo "   3. In the inspect panel, click 'Enable desktop MCP server'"
    exit 1
fi

echo ""
echo "📋 To connect in Cursor:"
echo "   1. Open Cursor Settings (Cmd + ,)"
echo "   2. Search for 'MCP' in settings"
echo "   3. Click 'Add Custom MCP' or 'Add Server'"
echo "   4. Use these settings:"
echo "      - Server name: figma-desktop"
echo "      - URL: http://127.0.0.1:3845/mcp"
echo "      - Type: http"
echo "   5. Click 'Connect' or 'Start'"
echo ""
echo "✅ Server is ready to connect!"

