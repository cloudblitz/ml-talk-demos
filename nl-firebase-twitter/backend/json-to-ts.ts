interface RootObject {
  id: string;
  text: string;
  user: string;
  user_time_zone?: any;
  user_followers_count: number;
  hashtags: Hashtag[];
  tokens: Token[];
  score: number;
  magnitude: number;
  entities: Entity[];
}

interface Entity {
  name: string;
  type: string;
  metadata: Metadata;
  salience: number;
  mentions: Mention[];
}

interface Mention {
  text: Text;
  type: string;
}

interface Metadata {
}

interface Token {
  text: Text;
  partOfSpeech: PartOfSpeech;
  dependencyEdge: DependencyEdge;
  lemma: string;
}

interface DependencyEdge {
  headTokenIndex: number;
  label: string;
}

interface PartOfSpeech {
  tag: string;
  aspect: string;
  case: string;
  form: string;
  gender: string;
  mood: string;
  number: string;
  person: string;
  proper: string;
  reciprocity: string;
  tense: string;
  voice: string;
}

interface Text {
  content: string;
  beginOffset: number;
}

interface Hashtag {
  text: string;
  indices: number[];
}