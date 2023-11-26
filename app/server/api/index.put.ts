// Import the Product interface
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const databaseManager = event.context.databaseManager
    const notesDatabase = event.context.notesDatabase
    // const userRole = event.context.userRole // Assuming you've set the user's role in a previous middleware

    // if (userRole !== 'admin') {
    //   throw createError({
    //     statusCode: 403, // Forbidden
    //     statusMessage: 'Permission denied',
    //   })
    // }
    if (!session) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      })
    }
    // Get User
    const user = await databaseManager.getUserByMail(session.user.email)
    const { data } = await readBody(event)

    data.updated = new Date().toISOString()

    const note = await notesDatabase.get(user.id)

    const pages = note.pages.filter(block => block.slug !== data.slug)
    pages.push(data)
    note.pages = pages

    // Update the product in the database
    await notesDatabase.put(user.id, note)
    return true
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
