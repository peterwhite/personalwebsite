---
title: Contact
subtitle: "Email: hi[at]peterwhite.dev"
---
<form class="w-full max-w-lg" method="post" action="https://formspree.io/f/xnqowldn" id="contact-form">
  <button type="submit">Send</button>
</form>

  <div class="flex flex-wrap mb-2 -mx-3">
    <div class="w-full px-3 mb-2 md:mb-0">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="name">
        Name
      </label>
     <input class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="name" name="name" required>
    </div>
  </div>
  <div class="flex flex-wrap mb-2 -mx-3">
    <div class="w-full px-3">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="email">
        E-mail
      </label>
      <input class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="_replyto" required>
    </div>
  </div>
  <div class="flex flex-wrap mb-2 -mx-3">
    <div class="w-full px-3">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="message">
        Message
      </label>
      <textarea class="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500" id="message" name="message" required></textarea>
	  <p class="text-xs italic text-gray-600">Your message will be sent by Formspree. Complete the anti-spam step on the next page, or your message will not be sent.</p>
    </div>
  </div>
  <input type="text" name="_gotcha" style="display: none;" class="contact-form__gotcha" val="">
  <div class="md:flex md:items-center">
    <div class="md:w-1/3">
      <button class="relative block w-full px-6 py-3 mt-4 text-base font-semibold leading-snug text-white transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md shadow-md sm:mt-0 sm:h-auto sm:w-auto hover:bg-gray-800 focus:outline-none focus:bg-gray-800 hover:bg-gray-600" type="submit">
        Next →
      </button>
    </div>
    <div class="md:w-2/3"></div>
  </div>
</form>
