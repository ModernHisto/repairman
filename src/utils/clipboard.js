export const copyToClipboard = async (text, onSuccess, onError) => {
  if (!text || typeof text !== 'string') {
    console.warn('copyToClipboard: передан пустой или неверный текст')
    onError?.('Неверный текст для копирования')
    return false
  }

  try {
    // Основной метод (работает в HTTPS контексте)
    await navigator.clipboard.writeText(text)
    onSuccess?.()
    return true
  } catch (err) {
    console.error('Copy error (Clipboard API):', err)
    
    try {
      // Резервный метод для старых браузеров/HTTP
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      
      const successful = document.execCommand('copy')
      document.body.removeChild(textArea)
      
      if (successful) {
        onSuccess?.()
        return true
      } else {
        throw new Error('The backup method did not work.')
      }
    } catch (fallbackError) {
      console.error('Backup method error:', fallbackError)
      onError?.(fallbackError.message)
      return false
    }
  }
}