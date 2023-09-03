class MCritic {
  private readonly url

  constructor (url: string) {
    this.url = url
  }

  getTextSelectionOrPrompt (): string {
    const selectedText = window.getSelection()?.toString().trim()
    if (selectedText !== undefined && selectedText !== null && selectedText !== '') {
      return selectedText
    } else {
      const userInput = prompt('Enter game name:')
      if (userInput !== null) {
        return userInput.trim()
      } else {
        return ''
      }
    }
  }

  getFullURLFor (game: string): string {
    const cleanedGameName = encodeURI(
      game
        .replaceAll('&', '')
        .replaceAll('?', '')
        .replaceAll(':', '')
        .replaceAll("'", '')
        .replaceAll(' ', '-')
        .replaceAll('--', '-')
        .toLowerCase()
    )
    return `${this.url}${cleanedGameName}`
  }

  openInBrowser (url: string): void {
    window.open(url)
  }
}

export default MCritic
