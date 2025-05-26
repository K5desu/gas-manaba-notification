'use strict';

/**
 * gmailの中の最新10件のメールを取得し、指定したドメインからのメールかどうかを確認する
 * @param {string} domain メールの送信者のドメイン
 */
const checkSender = domain => {
  /**
   * Gmailの受信トレイから最新10件のメールを取得
   */
  const threads = GmailApp.getInboxThreads(0, 10);

  // スレッドごとに処理
  threads.forEach(thread => {
    /**
     * スレッド内のメールを取得s
     */
    const messages = thread.getMessages();

    // メールごとに処理
    messages.forEach(message => {
      // メールの送信者を取得
      const sender = message.getFrom();

      // メールの送信者が指定したドメインかどうかを確認
      if (sender.includes(domain)) {
        // ログにメールの送信者を出力
        console.log(`メールが見つかりました: ${sender}`);
      }
    });
  });
};

/* eslint-disable @typescript-eslint/no-explicit-any */
globalThis.checkSender = checkSender;
