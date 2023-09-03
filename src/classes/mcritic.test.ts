import MCritic from './mcritic'

describe('MCritic', () => {
  // Mock window.open
  jest.spyOn(window, 'open').mockImplementation(() => window)

  describe('getTextSelectionOrPrompt', () => {
    it('should return selected text', () => {
      // Mock window.getSelection to return specific text
      const mockSelection = document.getSelection()
      if (mockSelection != null) {
        mockSelection.toString = jest.fn().mockReturnValue('Mocked selected text')
      }
      jest.spyOn(window, 'getSelection').mockReturnValue(mockSelection)

      const mcritic = new MCritic('https://example.com')
      const result = mcritic.getTextSelectionOrPrompt()

      expect(result).toBe('Mocked selected text')
    })

    it('should return user input', () => {
      const mockSelection = document.getSelection()
      if (mockSelection != null) {
        mockSelection.toString = jest.fn().mockReturnValue('')
      }
      jest.spyOn(window, 'getSelection').mockReturnValue(mockSelection)
      // Mock prompt to return user input
      jest.spyOn(window, 'prompt').mockReturnValue('User input')

      const mcritic = new MCritic('https://example.com')
      const result = mcritic.getTextSelectionOrPrompt()

      expect(result).toBe('User input')
    })

    it('should return an empty string if no selection or input', () => {
      // Mock window.getSelection and prompt to return null
      jest.spyOn(window, 'getSelection').mockReturnValue(null)
      jest.spyOn(window, 'prompt').mockReturnValue(null)

      const mcritic = new MCritic('https://example.com')
      const result = mcritic.getTextSelectionOrPrompt()

      expect(result).toBe('')
    })
  })

  describe('getFullURLFor', () => {
    it('should generate a cleaned URL', () => {
      const mcritic = new MCritic('https://example.com/')
      const result = mcritic.getFullURLFor("The Game: A Test's Tale")

      expect(result).toBe('https://example.com/the-game-a-tests-tale')
    })
  })

  describe('openInBrowser', () => {
    it('should open the URL in a new browser window', () => {
      const mcritic = new MCritic('https://example.com')
      mcritic.openInBrowser('https://example.com/test-url')

      // Expect window.open to be called with the correct URL
      expect(window.open).toHaveBeenCalledWith('https://example.com/test-url')
    })
  })
})
