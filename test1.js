addEventListener('scheduled', (event) => {
    event.waitUntil(handleScheduled(event.scheduledTime));
  });
  
  async function handleScheduled(scheduledTime) {  
    // Check if it's the middle of the day
    const hour = currentDate.getHours();
    if (hour >= 12 && hour < 18) {
      // Get facts or content based on the day of the week
      const content = await getContentOfDay(currentDate.getDay());
      await postTweet(content);
    }
  
    // Check if it's 8 AM
    if (hour === 8) {
      // Send words and their meanings
      await sendWordsAndMeanings(currentDate.getDay());
    }
  }
  
  
  
  async function getContentOfDay(dayOfWeek) {
    // Use an open-source API to get facts or content based on the day of the week
    // Modify this based on your chosen API
    let apiUrl = '';
    switch (dayOfWeek) {
      case 1: // Monday
        apiUrl = 'https://api.example.com/monday';
        break;
      case 2: // Tuesday
        apiUrl = 'https://api.example.com/tuesday';
        break;
      // Add cases for other days...
      default:
        apiUrl = 'https://api.example.com/default';
    }
  
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.content;
  }
  
  async function sendWordsAndMeanings(dayOfWeek) {
    // Based on the day of the week, send words and their meanings in the specified language
    let words = [];
    switch (dayOfWeek) {
      case 1: // Monday
      case 2: // Tuesday
        words = ['Word1', 'Word2', 'Word3'];
        break;
      case 3: // Wednesday
      case 4: // Thursday
        words = ['Palabra1', 'Palabra2', 'Palabra3']; // Spanish
        break;
      case 5: // Friday
      case 6: // Saturday
        words = ['Mot1', 'Mot2', 'Mot3']; // French
        break;
      // Add cases for other days...
      default:
        words = ['Default1', 'Default2', 'Default3'];
    }
  
    const tweetContent = words.map((word) => `${word[0]}: ${word[1]}`).join('\n');
    await postTweet(tweetContent);
  }
  
  function generateProgressBar(percentage) {
    const barLength = 20;
    const completedBars = Math.round((percentage / 100) * barLength);
    const remainingBars = barLength - completedBars;
    return '|||'.repeat(completedBars) + '...'.repeat(remainingBars);
  }
  