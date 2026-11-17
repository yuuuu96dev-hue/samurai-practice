type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

type EditionTask = Partial<Post>;

type SummaryPost = Pick<Post, 'id' | 'title'>;

type CompletedPost = Readonly<Post>;