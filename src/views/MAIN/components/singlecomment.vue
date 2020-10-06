<template>
<div>
     <div class="comment-theme">
        <div class="comment-image"><img src="/assets/images/blog-details/comments-author/img-1.jpg" ></div>
    </div>
    <div class="comment-main-area">
        <div class="comment-wrapper">
            <div class="comments-meta">
               <h4>{{comment.name}} <span class="comments-date">{{ comment.updated_at | moment("MMM D, YYYY à HH:mm") }}</span></h4>
            </div>
            <div class="comment-area">
                 <p v-if="!edit">{{comment.comment}} </p>

    <form v-if="edit" @submit="onSubmitcomm" id="commentform" class="comment-form">
        <div class="form-textarea">
         <textarea  id="comment" v-model="commenttomodify" placeholder="Commentaire Ici..." required></textarea>
            </div>
        <div class="form-submit">
            <input id="submit" value="Modifier" type="submit">
            <input id="submit" value="Annuler" type="button" @click="edit = false">
        </div>
    </form>
    <form v-if="reply" @submit="onSubmitreply" id="commentform" class="comment-form">
        <div class="form-textarea">
         <textarea  id="comment" v-model="replycomment" placeholder="Répondre Ici..." required></textarea>
            </div>
        <div class="form-submit">
            <input id="submit" value="Répondre" type="submit">
            <input id="submit" value="Annuler"  type="button" @click="reply = false">
        </div>
    </form>
    <div  align="right" class="comments-reply">
               <template v-if="comment.email === getuserinfo.email ">
                 <q-btn @click="fill(comment.id,comment.comment)" flat v-if="!edit" color="primary" round icon="edit">
              <q-tooltip  color="black" :offset="[10, 10]">
          Modifier
        </q-tooltip>
                </q-btn>
                 <q-btn @click="bar2 = true" flat color="red"  round icon="delete">
               <q-tooltip  color="black" :offset="[10, 10]">
          Supprimer
        </q-tooltip>
                </q-btn>
                </template>
               <template v-if="ifloggedIn">
                 <q-btn @click="replyto = comment.id, reply = true" v-if="!reply" flat color="green" round icon="reply">
              <q-tooltip  color="black" :offset="[10, 10]">
          Répondre
        </q-tooltip>
                </q-btn>
                </template>
                </div>
            </div>
        </div>
    </div>
<ul class="children">
            <replies v-for="reply in getcommentssss.commentsreplies"  :getuserinfo="getuserinfo" :comment="comment" :key="reply.id" class="comment" :reply="reply" />
</ul>

    <q-dialog v-model="bar2" persistent transition-show="flip-down" transition-hide="flip-up">
      <q-card class="bg-primary text-white">
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Voulez vous vraiment supprimer ?
        </q-card-section>

        <q-card-section class="q-pt-none float-right">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Supprimer" v-close-popup @click="deletee(comment.id, comment.idcomented)"  />
          </q-card-section>
      </q-card>
    </q-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import replies from './replies'
export default {
  components: {
    replies
  },
  data () {
    return {
      idcommented: this.$route.params.id,
      idtomodify: '',
      idtodelete: '',
      commenttomodify: '',
      edit: false,
      bar2: false,
      reply: false,
      replycomment: '',
      replyto: ''
    }
  },
  props: {
    getcommentssss: {
      required: true
    },
    comment: {
      required: true
    },
    getuserinfo: {
      required: true
    },
    ifloggedIn: {
      required: true
    }
  },
  methods: {
    ...mapActions('comments', ['updatecomment', 'deletecomment', 'replycommenty']),
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
        idcommented: this.idcommented
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
    onSubmitreply (e) {
      e.preventDefault()
      this.replycommenty({
        idreplyto: this.replyto,
        comment: this.replycomment,
        idcommented: this.idcommented,
        email: this.getuserinfo.email
      })
      this.$q.notify({
        progress: true,
        color: 'green-4',
        textColor: 'white',
        icon: 'done',
        position: 'top-right',
        message: ' Répondu'
      })
      this.replycomment = ''
      this.reply = false
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
  }
}
</script>

<style>

</style>
