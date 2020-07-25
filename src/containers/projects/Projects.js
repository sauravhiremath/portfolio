import React, {
  useState,
  useEffect,
  useContext,
  Suspense,
  lazy,
  useCallback,
} from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { openSource } from "../../portfolio";
import { Fade } from "react-reveal";
import { StyleConsumer } from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
import "./Project.css";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const { isDark } = useContext(StyleConsumer);

  const getRepoData = useCallback(() => {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${openSource.githubConvertedToken}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
        {
        user(login: "${openSource.githubUserName}") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazers {
                    totalCount
                  }
                  url
                  id
                  diskUsage
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
        `,
      })
      .then((result) => {
        console.log(JSON.stringify(result));
        setrepoFunction(result.data.user.pinnedItems.edges);
      });
  }, []);

  useEffect(() => {
    getRepoData();
  }, [getRepoData]);

  function setrepoFunction(array) {
    setrepo(array);
  }

  if (!(typeof repo === "string" || repo instanceof String)) {
    return (
      <Suspense fallback={renderLoader()}>
        <Fade bottom duration={1000} distance="20px">
          <div className="main" id="opensource">
            <h1 className="project-title">Open Source Projects</h1>
            <div className="repo-cards-div-main">
              {repo.map((v, i) => {
                return (
                  <GithubRepoCard isDark={isDark} repo={v} key={v.node.id} />
                );
              })}
            </div>
          </div>
        </Fade>
      </Suspense>
    );
  } else {
    return (
      <Suspense fallback={renderLoader()}>
        <FailedLoading />
      </Suspense>
    );
  }
}
