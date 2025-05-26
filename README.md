# SBハッカソン公開用claspsampleリポジトリ

# Feature
claspを用いてgasをgithub上で管理します。
また、トランスパイルライブラリを用いて、tsで管理します。
また、huskyを用いコミット時にコーディング規約のチェックを行います
また、githubworkflowで、自動的に自分のgcp上にデプロイします

# Usage

1. 自分のgasエディタの拡張機能のタブからGASを開き，スクリプトIDを本ディレクトリ内にある.clasp.jsonの"scriptId"の値に挿入します．

2. ```sudo npm install -g @google/clasp```を実行します。

3. ターミナル上で```yarn install```と実行します

4. ターミナル上で```yarn run build```と実行します。これにより、src直下のindex.tsがjsにトランスパイルします。

5. ターミナル上で```clasp login```と入力し、実行し、適切なアカウントにログインします

6. ターミナル上でclasp pushと入力し、実行します

これにより、1.のgasエディタにコードが反映されているはずです

