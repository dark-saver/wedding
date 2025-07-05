export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, attendance, guests, driving } = req.body || {};

  // 简单校验
  if (!name || !phone || !attendance || !guests || !driving) {
    return res.status(400).json({ error: '请填写完整信息' });
  }

  // 模拟日志（因为 Vercel Serverless 不能写文件）
  console.log('📨 收到 RSVP：', {
    name, phone, attendance, guests, driving,
    timestamp: new Date().toISOString()
  });

  // ✅ 可选：你可以在这里接入第三方，如：
  // - Airtable、Notion、Google Sheet
  // - Supabase、Firebase、Upstash、KV 存储

  return res.status(200).json({ message: 'RSVP 已收到！' });
}