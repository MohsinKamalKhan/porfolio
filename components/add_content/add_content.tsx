"use client";
import { ChangeEvent, useState } from 'react';
import styles from './add_content.module.css';

export default function AddContent({addContent} : {addContent: (formData: FormData) => Promise<void>}) {
    const [showImageUploader, setShowImageUploader] = useState(false);

    function showImageUploaderHandler(event: ChangeEvent<HTMLSelectElement>) {
        if (event.target.value === 'post') {
            setShowImageUploader(true);
        } else {
            setShowImageUploader(false);
        }
    }

    return (
            <form className={styles.form_container}>
                    <label htmlFor="heading">
                        Heading
                    </label>
                    <input
                        name="heading"
                        placeholder="Add Heading"
                        required
                    />

                    <label htmlFor="content">
                        Content
                    </label>
                    <textarea
                        className={styles.content}
                        name="content"
                        placeholder="Add Content"
                        required
                    />

                    <label htmlFor="post_or_blog">Post or Blog:</label>
                    <select onChange={(event) => showImageUploaderHandler(event)} name="post_or_blog">
                        <option value="blog">Blog</option>
                        <option value="post">Post</option>
                    </select>

                    { showImageUploader &&
                    <div>
                        <label htmlFor="img">Select image:</label>
                        <input type="file" id="img" name="img" accept="image/*" />
                    </div>
                    }

              <button formAction={addContent} type="submit">
                ADD
              </button>
            </form>
      );
}