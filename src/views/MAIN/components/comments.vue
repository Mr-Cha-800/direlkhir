<template>
<div >
    <div class="comments-area">
<div class="comments-section">
    <h3 class="comments-title">Commentaires</h3>
    <ol class="comments">
        <li class="comment even thread-even depth-1" id="comment-1">
            <comment v-for="comment in getcommentssss.comments" :key="comment.id" :getcommentssss="getcommentssss" :getuserinfo="getuserinfo" :comment="comment" :ifloggedIn="ifloggedIn" id="div-comment-1" />
            </li>
        </ol>
    </div> <!-- end comments-section -->
</div> <!-- end comments-area -->
<div v-if="ifloggedIn" class="comment-respond">
    <h3 class="comment-reply-title">Laisser un commentaire</h3>
    <form @submit="onSubmit" id="commentform" class="comment-form">
        <div class="form-textarea">
            <textarea id="comment" v-model="comments.comment" placeholder="Commentaire Ici..."></textarea>
        </div>
        <div class="form-submit">
            <input id="submit" value="Répondre" type="submit">
        </div>
    </form>
</div>
<div v-else>
<div class="wpo-cta-area-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="wpo-cta-text">
                            <h5 style="color:white">Afin de laisser un commentaire, oubien réagir à la publication veuillez vous s'authentifier par ici</h5>
                            <div class="btns">
                                <router-link to="/signup" tag="button" class="theme-btn">S'inscrire</router-link>
                                <router-link to="/signin" tag="button" class="theme-btn-s2">S'identifier</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import comment from './singlecomment'
export default {
  components: {
    comment
  },
  data () {
    return {
      comments: {
        comment: '',
        idcommentor: '',
        idcommented: this.$route.params.id,
        idreplyto: '',
        email: ''
      }
    }
  },
  props: {
    getcommentssss: {
      required: true
    }
  },
  methods: {
    ...mapGetters('auth', ['loggedIn', 'getuser']),
    ...mapActions('auth', ['setuser']),
    ...mapActions('comments', ['addcomment', 'updatecomment', 'deletecomment']),
    onSubmit (e) {
      e.preventDefault()
      this.comments.idcommentor = this.getuserinfo.id
      this.comments.email = this.getuserinfo.email
      this.addcomment(this.comments)
      this.comments.email = null
      this.comments.comment = null
      this.comments.idreplyto = null
      this.$q.notify({
        progress: true,
        color: 'green-4',
        textColor: 'white',
        icon: 'done',
        position: 'top-right',
        message: 'Bien recu'
      })
    },
    fill (id, comment) {
      this.edit = true
      this.idtomodify = id
      this.commenttomodify = comment
    },
    onSubmitcomm (e) {
      e.preventDefault()
      this.updatecomment({
        id: this.idtomodify,
        comment: this.commenttomodify,
        idcommented: this.comments.idcommented
      })
      this.$q.notify({
        progress: true,
        color: 'green-4',
        textColor: 'white',
        icon: 'done',
        position: 'top-right',
        message: ' Modifié'
      })
      this.edit = false
    },
    deletee (idtodelete, idcommented) {
      this.deletecomment({
        id: idtodelete,
        idcommented: idcommented
      })
      this.$q.notify({
        progress: true,
        color: 'green-4',
        textColor: 'white',
        icon: 'done',
        position: 'top-right',
        message: ' Supprimé'
      })
      // alert(this.$route.params.id)
    }
  },
  computed: {
    ifloggedIn () {
      return this.loggedIn()
    },
    getuserinfo () {
      return this.getuser()
    }
  },
  created () {
    this.setuser()
  }
}
</script>

<style>

</style>
