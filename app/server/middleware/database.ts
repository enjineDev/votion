// middleware/databaseMiddleware.ts
import { useDatabaseManager } from '../../lib'; // Import your DatabaseManager

export default defineEventHandler(async (event) => {
  // App Database instance
  const databaseManager = useDatabaseManager();
  event.context.databaseManager = databaseManager;
  event.context.filesDatabase = await databaseManager.accessDatabase('files') // TODO Make it Native in the Manager?

  // Shop Database instance
  event.context.notesDatabase = await databaseManager.accessDatabase('notes')
  // Continue with the request
  return;
});
