export const checkSender = (): void => {
  // Gmailの受信トレイからメールを取得
  const threads = GmailApp.getInboxThreads(0, 10); // 受信トレイの最初の10スレッドを取得
  threads.forEach((thread: GoogleAppsScript.Gmail.GmailThread) => {
    const messages = thread.getMessages(); // スレッド内のすべてのメッセージを取得
    messages.forEach((message: GoogleAppsScript.Gmail.GmailMessage) => {
      const sender = message.getFrom(); // メールの送信者を取得
      if (sender.includes('manaba@gmail.com')) {
        // 送信者がmanaba@gmail.comを含む場合
        console.log(`メールが見つかりました: ${sender}`);
      }
    });
  });
};
//実行
checkSender();
