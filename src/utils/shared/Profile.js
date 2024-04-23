import { getProfile } from "../../services/apiUsers"
import { getUserSession } from "../../services/session"

export const getUserProfile =async () => {
    const session = await getUserSession()
  
  // console.log("SESSION:", session)

  const sessionId = session?.user?.id

  const profile = await getProfile(sessionId)

  return profile

}