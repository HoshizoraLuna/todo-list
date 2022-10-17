import { AxiosError } from 'axios'
import { ComponentInternalInstance } from 'vue'

function useAxiosErrorHandler(
  instance: ComponentInternalInstance | null,
  e: AxiosError
) {
  const toast = instance?.proxy?.$toast

  let message = e.message

  if (e.response) {
    const status = e.response.status

    switch (status) {
      case 400:
        message = 'Bad Request'
        break
      case 401:
        message = 'Unauthorized'
        break
      case 403:
        message = 'Forbidden'
        break
      case 404:
        message = 'Not found'
        break
      default:
        message = 'Something went wrong'
    }
  }

  toast?.error(message)
}

export default useAxiosErrorHandler
