<script lang="ts">
  import { storage } from '../storage'

  export let count: number
  let successMessage: string = null

  function increment() {
    count += 1
  }

  function decrement() {
    count -= 1
  }

  function save() {
    storage.set({ count }).then(() => {
      successMessage = 'Options saved!'

      setTimeout(() => {
        successMessage = null
      }, 1500)
    })
  }
</script>

<div class="container">
  <p>Current count: <b>{count}</b></p>
  <div>
    <button on:click={decrement}>-</button>
    <button on:click={increment}>+</button>
    <button on:click={save}>Save</button>
    {#if successMessage}<span class="success">{successMessage}</span>{/if}
  </div>
</div>

<style>
  .container {
    min-width: 250px;
  }

  button {
    padding: 5px 10px;
    color: #ecf0f1;
    background-color: #2ecc71;
    border: none;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 60%);
    transition: background-color 0.3s;
  }

  button:hover,
  button:focus {
    background-color: #27ae60;
  }

  .success {
    font-weight: bold;
    color: #2ecc71;
  }
</style>
