const { VK, AttachmentType, MessageSource } = require('vk-io');

const { blacklist, TOKEN } = require('./config');

const vk = new VK({
	token: TOKEN,
});

vk.updates.on('message_new', context => {
	if (context.peerType != MessageSource.USER) {
		return;
	}
	if (blacklist.includes(context.peerId)) {
		context.attachments.forEach(attach => {
			if (attach.type === AttachmentType.AUDIO_MESSAGE) {
				context.send(`Получатель установил о̲г̲р̲а̲н̲и̲ч̲е̲н̲и̲я̲ на получение аудио сообщений. 
				
				𝗘𝗿𝗿𝗼𝗿: 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗻𝗼𝘁 𝘀𝗲𝗻𝘁`);
			}
		});
	}
});

vk.updates.start().catch(console.error);
