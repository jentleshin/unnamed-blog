/**These are necessary imports / components for the page */
import { ImageSize, ListType } from "../shared/enums";
import { Text, List, Image, LinkTo, Section } from "../components";
import CodeBlock from "../components/CodeBlock";
import { Article_Entry_inList } from "../constants/codeBlocks";
const Cacti = () => {
  return (
    <>
      <Section>
        <Text subtitle>0. File position</Text>
        <Text quote>
          *note: All the files you will create or interact with are in...
        </Text>
        <List type={ListType.disc}>
          <li>
            <Text p>
              <b>BLOG_CONSTANTS folder</b> <br />
              inside this we have our _BLOG_SETUP.tsx file where we set our
              authors, navbar and other details and we have _ARTICLES_LIST.tsx
              file where we maintain our article list.
            </Text>
          </li>
          <li>
            <Text p>
              <b>blog folder</b> <br />
              Inside this we will create out blog files or sub folders for your
              article files like this current file is in{" "}
              {"pages -> blog -> tutorial"}
            </Text>
          </li>
          <li>
            <Text p>
              <b>images folder</b> <br />
              In this we will save all our images to use in the articles, like
              the og-image.jpg file is stored in {"public -> images"} folder.
            </Text>
          </li>
        </List>
      </Section>
      <Section>
        <Text subtitle>1. Creating the article file.</Text>
        <Text p>
          First create a file inside <b>blog</b> folder in <b>pages</b>{" "}
          (/pages/blog/). You can also create a sub folder inside blog folder.
          For SEO, the best practice is to name the file and folders in all
          lower case seperated by hyphen <b>"-"</b> and end with <b>".tsx"</b>
          . <br /> example: <b>"your-first-article.tsx"</b>. This will create a{" "}
          <b>tsx</b> file.
        </Text>
        <Text p>
          First create a file inside <b>blog</b> folder in <b>pages</b>{" "}
          (/pages/blog/). You can also create a sub folder inside blog folder.
          For SEO, the best practice is to name the file and folders in all
          lower case seperated by hyphen <b>"-"</b> and end with <b>".tsx"</b>
          . <br /> example: <b>"your-first-article.tsx"</b>. This will create a{" "}
          <b>tsx</b> file.
        </Text>
        <Text p>
          First create a file inside <b>blog</b> folder in <b>pages</b>{" "}
          (/pages/blog/). You can also create a sub folder inside blog folder.
          For SEO, the best practice is to name the file and folders in all
          lower case seperated by hyphen <b>"-"</b> and end with <b>".tsx"</b>
          . <br /> example: <b>"your-first-article.tsx"</b>. This will create a{" "}
          <b>tsx</b> file.
        </Text>
      </Section>
      <Section>
        <Text subtitle>2. Adding your article details in ARTICLES_LIST</Text>
        <Text p>
          Go to <b>/BLOG_CONSTANTS/_ARTICLES_LIST.tsx</b> file. Here we will add
          details of your article in <b>ARTICLES_LIST</b> array as follows.
        </Text>

        <CodeBlock code={Article_Entry_inList} />
        <Text p>
          In our article details we have 4 important properties{" "}
          <b>path, featureArticle, preview, and seo</b>.
        </Text>

        <List type={ListType.disc}>
          <li>
            <Text p>
              <b>path</b>
              <br />
              As show in the above image, path contains the file path of our
              article.
              <br /> If you have{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense"
                target="_blank"
                rel="noopener noreferrer"
              >
                Path Intellisense
              </a>{" "}
              installed in your VS Code, it will be ease to add path, just hit{" "}
              <b>"/"</b> and then auto suggestions will come up, just follow the
              auto suggestions and set the path of the article file.
            </Text>
          </li>
          <li>
            <Text p>
              <b>featureArticle</b> <br />
              You can set it <b>true or false</b> as shown in the above image.
              If true the article card will be of full width as shown in the
              image below.
            </Text>
            <Text quote>
              *note : adding featureArticle property is optional
            </Text>

            <Image
              src="/public/imp_assets/tutorials/feature-article-example.png"
              alt="feature article example | webexpe.com"
              caption="feature article exmaple"
              size={ImageSize.DEFAULT}
            />
          </li>
          <li>
            <Text p>
              <b>preview</b> <br />
              This will display the details of the article in the article cards
              on main home page and article's header on the article page
            </Text>
            <List type={ListType.disc}>
              <li>
                <Text p>
                  <b>author</b> <br />
                  Paste the author variable imported from _BLOG_SETUP as shown
                  in the image.
                </Text>
              </li>
              <li>
                <Text p>
                  <b>date : </b> <br />
                  Write the article date in quotes i.e. as a string.
                </Text>
              </li>
              <li>
                <Text p>
                  <b>articleTitle</b> <br />
                  Write the article title in quotes i.e. as a string.
                </Text>
              </li>
              <li>
                <Text p>
                  <b>tags</b> <br />
                  Write tags and seperate with commas.
                </Text>
              </li>
              <li>
                <Text p>
                  <b>thumbnail</b> <br />
                  Save the image file in public-images folder and paste the
                  image path. This will be displayed in article cards on home
                  page. For thumpbails the recommended size is <b>540x300px</b>.
                </Text>
              </li>
              <li>
                <Text p>
                  <b>shortIntro</b> <br />A short intro for your article that
                  will be shown on article cards.
                </Text>
              </li>
              <li>
                <Text p>
                  <b>category : </b>
                  If the article in under some category, write the category
                  name.
                </Text>
              </li>
            </List>
            <Text p>
              Check the above image for example of check{" "}
              /BLOG_CONSTANTS/_ARTICLES_LIST.tsx file.
            </Text>
          </li>
          <li>
            <Text p>
              <b>seo</b> <br />
              SEO details for your article page. As shown in the above image seo
              contains 5 important properties{" "}
              <b>
                title, description, keywords, ogImage, twitterHandle, author
              </b>
              .
            </Text>
            <Text quote>
              <b>*note : </b> <b>seo</b> is optional as we have already passed
              <b>preview</b> we will create default seo with that but if you
              want to pass any extra keywords or different page title,
              description etc we can write that in <b>seo : {"{}"}</b> object.
            </Text>
          </li>
        </List>
      </Section>
      <Section>
        <Text subtitle>3. Writing the article.</Text>
        <Text p>
          Now we can go to our created file <b>your-first-article.tsx</b> and
          write our article. To write our article we will use different
          components as shown in
          <b>
            <LinkTo
              href="/pages/tutorial/blog-with-sidebar-layout.tsx"
              passHref
            >
              {" "}
              Blog with sidebar layout
            </LinkTo>
          </b>{" "}
          or{" "}
          <b>
            <LinkTo
              href="/pages/tutorial/blog-with-centered-layout.tsx"
              passHref
            >
              {" "}
              Blog with centered layout
            </LinkTo>
          </b>{" "}
          example. You can also checkout all the available components to write
          your article in{" "}
          <b>
            <LinkTo href="/pages/tutorial/all-components.tsx" passHref>
              All Components Demo
            </LinkTo>
          </b>{" "}
          page.
        </Text>
        <Text quote>
          For any any queries related to this project / template feel free to
          connect with us at <u>webexpe13@gmail.com</u>. You can also post any
          comments on our{" "}
          <a
            href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>
              <i>github discussions</i>
            </u>
          </a>
          .
        </Text>
      </Section>
    </>
  );
};

export default Cacti;
