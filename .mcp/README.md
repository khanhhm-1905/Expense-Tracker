# MCP Server Configuration

Dự án này sử dụng Model Context Protocol (MCP) để tích hợp với các công cụ phát triển.

## Cấu hình MCP Servers

### 1. Context7 MCP Server

Context7 cung cấp khả năng tìm kiếm và phân tích code context thông minh.

**Setup:**
1. Đăng ký tại [context7.com](https://context7.com)
2. Lấy API key
3. Cập nhật trong `.mcp/config.json`:

```json
"context7": {
  "env": {
    "CONTEXT7_API_KEY": "your_actual_api_key"
  }
}
```

### 2. Filesystem Server

Cho phép MCP truy cập và quản lý filesystem của dự án.

**Tính năng:**
- Đọc/ghi files
- List directories
- Search files

### 3. GitHub Server (Optional)

Tích hợp với GitHub để quản lý issues, PRs, và repositories.

**Setup:**
1. Tạo Personal Access Token tại GitHub Settings
2. Cập nhật trong `.mcp/config.json`

## Sử dụng với Cursor/Windsurf

1. Copy nội dung từ `.mcp/config.json` vào MCP settings của editor
2. Restart editor để load MCP servers
3. Các servers sẽ tự động khởi động khi cần

## Sử dụng với Claude Desktop

1. Copy `.mcp/config.json` vào:
   - macOS: `~/Library/Application Support/Claude/config.json`
   - Windows: `%APPDATA%\Claude\config.json`
2. Restart Claude Desktop

## Testing MCP Servers

```bash
# Test Context7
npx -y @context-labs/mcp-server

# Test Filesystem
npx -y @modelcontextprotocol/server-filesystem .
```

## Tài liệu

- [MCP Protocol](https://modelcontextprotocol.io/)
- [Context7 Docs](https://context7.com/docs)
- [MCP Servers List](https://github.com/modelcontextprotocol/servers)
