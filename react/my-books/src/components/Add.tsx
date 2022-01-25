import { ForkOutlined } from "@ant-design/icons";
import { Button, Input, message, PageHeader } from "antd";
import TextArea from "antd/lib/input/TextArea";
import TextAreaType from "rc-textarea";
import Layout from "./Layout";
import styles from "./Add.module.css";
import { useRef } from "react";
import { BookReqType } from "../types";

interface AddProps {
  loading: boolean;
  back: () => void;
  logout: () => void;
  add: (book: BookReqType) => void;
}

const Add: React.FC<AddProps> = ({ loading, back, logout, add }) => {
  const titleRef = useRef<Input>(null);
  const commentRef = useRef<TextAreaType>(null);
  const authorRef = useRef<Input>(null);
  const urlRef = useRef<Input>(null);

  const click = () => {
    const title = titleRef.current!.state.value;
    const comment = commentRef.current!.resizableTextArea.props.value as string;
    const author = authorRef.current!.state.value;
    const url = urlRef.current!.state.value;

    if (
      title === undefined ||
      comment === undefined ||
      author === undefined ||
      url === undefined
    ) {
      message.error("Please fill out all inputs");
      return;
    }

    add({
      title,
      comment,
      author,
      url,
    });
  };

  return (
    <Layout>
      <PageHeader
        onBack={back}
        title={
          <div>
            <ForkOutlined /> Add Book
          </div>
        }
        subTitle="Add your book"
        extra={[
          <Button
            key="1"
            type="primary"
            onClick={logout}
            className={styles.button_logout}
          >
            Logout
          </Button>,
        ]}
      />

      <div className={styles.add}>
        <div className={styles.input_title}>
          Title <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input placeholder="Title" className={styles.input} ref={titleRef} />
        </div>
        <div className={styles.input_comment}>
          Commnet <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <TextArea
            rows={4}
            placeholder="Comment"
            className={styles.input}
            ref={commentRef}
          />
        </div>
        <div className={styles.input_author}>
          Author <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input
            placeholder="Author"
            className={styles.input}
            ref={authorRef}
          />
        </div>
        <div className={styles.input_url}>
          URL <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input placeholder="URL" className={styles.input} ref={urlRef} />
        </div>
        <div className={styles.button_area}>
          <Button
            size="large"
            loading={loading}
            onClick={click}
            className={styles.button}
          >
            Add
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Add;
