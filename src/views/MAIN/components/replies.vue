<template>
    <div v-if="reply.idreplyto === comment.id" :key="reply.id" >
    <div class="comment-theme">
        <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-3.jpg" alt></div>
    </div>
    <div class="comment-main-area">

        <q-separator/>
        <div class="comment-wrapper">
            <div class="comments-meta">
                <h4>{{reply.name}} a répondu<span class="comments-date">{{ reply.updated_at | moment("MMM D, YYYY à HH:mm") }}</span></h4>
            </div>
            <div class="comment-area">
    <p v-if="!edit">{{reply.comment}} </p>

    <form v-if="edit" @submit="onSubmitcomm" id="commentform" class="comment-form">
        <div class="form-textarea">
         <textarea  id="comment" v-model="commenttomodify" placeholder="Commentaire Ici..." required></textarea>
            </div>
        <div class="form-submit">
            <input id="submit" value="Modifier" type="submit">
            <input id="submit" value="Annuler" type="button" @click="edit = false">
        </div>
    </form>
        <div v-if="reply.email === getuserinfo.email " align="right" class="comments-reply">
            <q-btn @click="fill(reply.id,reply.comment)" flat v-if="!edit" round color="primary" icon="edit">
              <q-tooltip  color="black" :offset="[10, 10]">
          Modifier
        </q-tooltip>
        </q-btn>
            <q-btn @click="bar2 = true" flat color="red" round icon="delete">
              <q-tooltip  color="black" :offset="[10, 10]">
          Supprimer
        </q-tooltip>
        </q-btn>
        </div>
            </div>
        </div>
    </div>
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
          <q-btn flat label="Supprimer" v-close-popup @click="deletee(reply.id, reply.idcomented)"  />
          </q-card-section>
      </q-card>
    </q-dialog>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    reply: {
      required: true
    },
    comment: {
      required: true
    },
    getuserinfo: {
      required: true
    }
  },
  data () {
    return {
      idcommented: this.$route.params.id,
      idtomodify: '',
      idtodelete: '',
      commenttomodify: '',
      edit: false,
      bar2: false
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
