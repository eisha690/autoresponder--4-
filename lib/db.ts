// This is a mock database implementation
// In a real application, you would use a real database like MongoDB

interface User {
  id: string
  name: string
  email: string
  image?: string
  createdAt: Date
}

interface Platform {
  id: string
  userId: string
  type: "whatsapp" | "facebook" | "instagram"
  name: string
  status: "active" | "inactive"
  credentials: Record<string, any>
  createdAt: Date
}

interface Template {
  id: string
  userId: string
  name: string
  description: string
  content: string
  platforms: string[]
  createdAt: Date
}

interface Message {
  id: string
  platformId: string
  direction: "incoming" | "outgoing"
  content: string
  sender: string
  timestamp: Date
}

// Mock data
const users: User[] = []
const platforms: Platform[] = []
const templates: Template[] = []
const messages: Message[] = []

// User functions
export async function createUser(user: Omit<User, "id" | "createdAt">): Promise<User> {
  const newUser = {
    id: Math.random().toString(36).substring(2, 9),
    ...user,
    createdAt: new Date(),
  }
  users.push(newUser)
  return newUser
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return users.find((user) => user.email === email) || null
}

// Platform functions
export async function createPlatform(platform: Omit<Platform, "id" | "createdAt">): Promise<Platform> {
  const newPlatform = {
    id: Math.random().toString(36).substring(2, 9),
    ...platform,
    createdAt: new Date(),
  }
  platforms.push(newPlatform)
  return newPlatform
}

export async function getPlatformsByUserId(userId: string): Promise<Platform[]> {
  return platforms.filter((platform) => platform.userId === userId)
}

// Template functions
export async function createTemplate(template: Omit<Template, "id" | "createdAt">): Promise<Template> {
  const newTemplate = {
    id: Math.random().toString(36).substring(2, 9),
    ...template,
    createdAt: new Date(),
  }
  templates.push(newTemplate)
  return newTemplate
}

export async function getTemplatesByUserId(userId: string): Promise<Template[]> {
  return templates.filter((template) => template.userId === userId)
}

// Message functions
export async function createMessage(message: Omit<Message, "id">): Promise<Message> {
  const newMessage = {
    id: Math.random().toString(36).substring(2, 9),
    ...message,
  }
  messages.push(newMessage)
  return newMessage
}

export async function getMessagesByPlatformId(platformId: string): Promise<Message[]> {
  return messages.filter((message) => message.platformId === platformId)
}
