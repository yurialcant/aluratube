import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import {StyledFavorites} from "../src/components/Favorites";

function HomePage() {
   
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    

    return (
        <>
           
         <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                
            }}>
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
            <Header />
            <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
                Conteúdo
            </Timeline>
            <Favorites favoritos={config.favoritos} />
        </div>
        </>
    );
}

export default HomePage


const StyledHeader = styled.div`
    background-color: ${({theme}) => theme.backgroundLevel1};

        img {
        width: 100%;
        height: 70vh;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .user-info > img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    
  `;

function Header() {
    return (
        <StyledHeader>
            <img src={config.banner} />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({searchValue, ...props}) {
    
    const playlistNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistNames) => {
                const videos = props.playlists[playlistNames];
                return (
                    <section key={playlistNames}>
                        <h2>{playlistNames}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)
                           
                            })
                            .map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            }

                            )}

                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

function Favorites(props){
    const listFavoritos = Object.keys(props.favoritos);

    return (
        <StyledFavorites>
            {listFavoritos.map((listFavoritos) => {
                const canais = props.favoritos[listFavoritos];
                //console.log(canais);
                return (
                    <section>
                        <h2>{listFavoritos}</h2>
                        <div>
                            {canais.map((canais) => {
                                return (
                                    <a href={   canais.urlUser}>
                                        <img src={canais.imgUser} />
                                        <span>
                                            {canais.nameUser}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                );
            })}
        </StyledFavorites>
    )
}
