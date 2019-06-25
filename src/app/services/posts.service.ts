import { Injectable, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Post } from '../models/Post.model';

@Injectable()
export class PostsService {
    posts : Post[] = [
        {
          title: "Qu'est-ce que le Lorem Ipsum?",
          content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
          loveIts: 0,
          created_at: new Date()
        },
        {
          title: "Pourquoi l'utiliser?",
          content: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).",
          loveIts: 0,
          created_at: new Date()
        },
        {
          title: "Où puis-je m'en procurer?",
          content: "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.",
          loveIts: 0,
          created_at: new Date()
        }
      ]
    postSubject = new Subject<Post[]>();     

    constructor(){};

    emitPosts() {
        console.log(this.posts);
        this.postSubject.next(this.posts);
    }

    //Creation du nouveau post
    createNewPost(newPost: Post){
        this.posts.push(newPost);
        this.emitPosts();
    }

    //Suppression d'un post
    removePost(post: Post){     
        const postIndexToRemove = this.posts.findIndex(
            (postEl) => {
                if(postEl === post){                    
                    return true
                }
            }
        );        
        this.posts.splice(postIndexToRemove,1);        
        this.emitPosts();
    }
}